'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"

export default function UserDashboard() {
  const [links, setLinks] = useState([
    { id: '1', title: 'My Website', url: 'https://example.com' },
    { id: '2', title: 'Twitter', url: 'https://twitter.com/example' },
    { id: '3', title: 'Instagram', url: 'https://instagram.com/example' },
  ])

  const [newLink, setNewLink] = useState({ title: '', url: '' })

  const addLink = () => {
    if (newLink.title && newLink.url) {
      setLinks([...links, { ...newLink, id: Date.now().toString() }])
      setNewLink({ title: '', url: '' })
    }
  }

  const onDragEnd = (result: { destination: { index: number }; source: { index: number } }) => {
    if (!result.destination) return

    const newLinks = Array.from(links)
    const [reorderedItem] = newLinks.splice(result.source.index, 1)
    newLinks.splice(result.destination.index, 0, reorderedItem)

    setLinks(newLinks)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to Your Linkroom</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Add New Link</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Input
              placeholder="Link Title"
              value={newLink.title}
              onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
            />
            <Input
              placeholder="URL"
              value={newLink.url}
              onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
            />
            <Button onClick={addLink}>Add Link</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Links</CardTitle>
        </CardHeader>
        <CardContent>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="links">
              {(provided) => (
                <ul {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                  {links.map((link, index) => (
                    <Draggable key={link.id} draggableId={link.id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white p-4 rounded shadow flex justify-between items-center"
                        >
                          <div>
                            <h3 className="font-semibold">{link.title}</h3>
                            <p className="text-sm text-gray-500">{link.url}</p>
                          </div>
                          <Button variant="destructive" onClick={() => setLinks(links.filter(l => l.id !== link.id))}>
                            Delete
                          </Button>
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </CardContent>
      </Card>
    </div>
  )
}