import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"
import React from 'react'
import { Textarea } from "../ui/textarea"

export function AddNewItem({ addNewItem }: { addNewItem: any }) {
    const [itemName,  setItemName] = React.useState("");
    const [itemInstruction,  setItemInstruction] = React.useState("");
    
    const handleSubmit = () => {
        if (itemName.trim() === "") {
            return;
        }
        addNewItem(itemName);
        addNewItem(itemInstruction);
        setItemName("");
        setItemInstruction("");
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon">
                    <Plus className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className="text-start">
                    <DialogTitle>Add new checklist step</DialogTitle>
                    <DialogDescription>
                        Enter the name of your new framework
                    </DialogDescription>
                </DialogHeader>
                <div className="text-sm ">Task name</div>
                <div className="grid gap-4">
                    <Input id="name" placeholder="Task name"value={itemName} onChange={(e: any) => setItemName(e.target.value)} />
                </div>
                <div className="text-sm ">Insert instructions (customer will not see it)</div>
                <div className="grid gap-4">
                    <Textarea id="instructions" placeholder="Internal instructions" value={itemInstruction} onChange={(e: any) => setItemInstruction(e.target.value)}/>
                </div>
                <DialogFooter>
                    <Button onClick={handleSubmit} className="w-full">Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}