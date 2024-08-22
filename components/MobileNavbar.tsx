import { Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

const MobileNavbar = ({user}: MobileNavProps) => {
  return (
    <section>
        <Sheet>
            <SheetTrigger>Open</SheetTrigger>
       <SheetContent>
        <SheetHeader>
            <SheetTitle>
                Are you absolutely sure?
            </SheetTitle>
            <SheetDescription>
                This action cannot be undone. This will oermanently 
            </SheetDescription>
        </SheetHeader>
       </SheetContent>
        </Sheet>
    </section>
  )
}

export default MobileNavbar