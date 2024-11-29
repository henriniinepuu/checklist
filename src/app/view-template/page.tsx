import { CardDemo } from "@/components/checklists/checklist-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ViewTemplatePage() {
  return (
    <div className="items-center justify-items-center pt-10">
      <main>
        <div className="flex gap-4 justify-between pb-3">
          <Input type="number" placeholder="Ticket ID"></Input>
          <Button>Submit</Button>
        </div >
        <CardDemo className="w-full p-10">
        </CardDemo>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>

    </div>
  );
}
