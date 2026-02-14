import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}

export const FeatureCard = ({
  icon,
  title,
  description,
  badge,
}: FeatureCardProps) => {
  return (
    <Card className="group relative gap-4 rounded-sm bg-primary-foreground border group bg-card-hover cursor-pointer hover:border-primary/30 hover:shadow-tertiary">
      <CardHeader className="pb-0">
        <div className="flex items-center justify-between">
          <div className="text-muted-secondary size-12 rounded-sm flex items-center justify-center">
            {icon}
          </div>
        </div>
        <CardTitle className="text-lg font-semibold text-left mt-4">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground text-left leading-relaxed">
          {description}
        </p>
      </CardContent>
      {/* <BorderBeam
        duration={index % 2 === 0 ? 4 : 8}
        size={300}
        reverse={index % 2 == 0 ? true : false}
        className="from-transparent via-primary to-transparent"
      /> */}
    </Card>
  );
};
