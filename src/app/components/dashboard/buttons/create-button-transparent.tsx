import { PlusIcon } from '@heroicons/react/24/outline';

type CreateButtonProps = {
    content: string;
}

export function CreateButtonTransparent({ content }: CreateButtonProps) {
    return(
        <button className="flex items-center gap-2 rounded-2xl border-2 px-4 cursor-pointer
        hover:text-primary-foreground">
            <PlusIcon className="h-5 w-5"/>
            <div>{content}</div>
        </button>
    )
}