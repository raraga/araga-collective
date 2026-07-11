import { Badge } from '@/components/ui/badge';

interface Tag {
    id: number;
    name: string;
    slug: string;
}

interface ProjectTagsProps {
    tags: Tag[];
}

export default function ProjectTags({ tags }: ProjectTagsProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
                <Badge key={tag.id} variant="secondary">
                    {tag.name}
                </Badge>
            ))}
        </div>
    );
}
