import { Sparkles, Users, Link } from "lucide-react"; // Adjust to the actual icon library you're using
import { useTheme } from "next-themes";

export function CardHoverEffectDemo() {
  const { theme } = useTheme(); // Access the current theme

  const features = [
    {
      icon: Sparkles,
      title: "Beautiful Themes",
      description: "Choose from a wide range of professionally designed themes or create your own.",
    },
    {
      icon: Users,
      title: "Built for Creators",
      description: "Perfect for influencers, artists, businesses, and anyone who wants to share multiple links.",
    },
    {
      icon: Link,
      title: "Custom Domains",
      description: "Use your own domain name for a more professional and branded experience.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8 py-20 text-center">
      <h2 className="text-3xl font-bold mb-12">Why Choose Linkroom?</h2>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 
        
        }`}
      >
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-6 rounded-lg hover:shadow-lg transition-shadow border bg-slate-300"
            style={{
             
            }}
          >
            <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
