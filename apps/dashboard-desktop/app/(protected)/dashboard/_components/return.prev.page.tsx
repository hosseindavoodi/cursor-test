import { ArrowRight, Link } from "lucide-react";
import { useRouter } from "next/navigation";

interface ReturnPrevPage {
    title: string
    href: string
}

function ReturnPrevPage(props: ReturnPrevPage) {

    const router = useRouter()

    return <>
        <div className="w-full top-[152px]">
            <div className="flex gap-x-2">
                <button
                    className="w-[40px] h-[40px] rounded-full bg-gray-100 flex items-center justify-center"
                    onClick={() => router.push(props.href)}
                >
                    <ArrowRight />
                </button>
                <p className="font-semibold text-[24px]">{props.title}</p>
            </div>
        </div>
    </>;;
}

export default ReturnPrevPage;