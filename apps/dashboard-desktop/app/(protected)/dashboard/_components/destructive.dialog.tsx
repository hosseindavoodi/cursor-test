"use client"

import { Button } from "@sana/ui/components/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@sana/ui/components/dialog"
import { Input } from "@sana/ui/components/input"
import { Label } from "@sana/ui/components/label"
import { Trash } from "lucide-react"
import { useState } from "react"

interface DestructiveDialogProps {
    title?: string
    message?: string
}

export function DestructiveDialog(props: DestructiveDialogProps) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <form>
                <DialogTrigger asChild>
                    <button
                        onClick={() => {
                            setIsOpen(true)
                        }}
                        className="w-[24px] h-[24px] flex justify-center items-center"
                    >
                        <Trash size={20} className="text-red-500" />
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] sm:min-h-[374px]" dir="rtl">
                    <div className="flex flex-col items-center">
                        <div className="w-[80px] h-[80px] mt-[50px] flex items-center justify-center bg-red-50 rounded-full">
                            <Trash className="text-primary-500" size={40} />
                        </div>
                        <div className="w-full space-y-[12px] mt-[16px]">
                            <p className="w-full text-[24px] font-semibold text-center">{props?.title}</p>
                            <p className="w-full text-sm text-center">{props?.message}</p>
                        </div>
                    </div>
                    <DialogFooter className="absolute w-full px-5 gap-x-3 grid grid-cols-2 bottom-5 font-normal">
                        <DialogClose asChild>
                            <Button
                                variant="secondary"
                                onClick={() => { setIsOpen(false) }}
                                className="h-[52px] rounded-full"
                            >
                                انصراف
                            </Button>
                        </DialogClose>
                        <Button
                            type="button"
                            className="h-[52px] rounded-full"
                            variant="outline"
                        >
                            پاک کردن
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
