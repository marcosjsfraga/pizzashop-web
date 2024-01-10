import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from "lucide-react";
import { Button } from "./ui/button";

export interface Props {
  pageIndex: number;
  totalCout: number;
  perPage: number;
}

export default function Pagination(props: Props) {
  const pages = Math.ceil(props.totalCout / props.perPage) || 1;

  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">
        Total de {props.totalCout} item(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="font-medium">
          Página {props.pageIndex + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronsLeft className="h-4 w-4 p-0" />
            <span className="sr-only">Primeira página</span>
          </Button>

          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronLeft className="h-4 w-4 p-0" />
            <span className="sr-only">Página anterior</span>
          </Button>

          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronRight className="h-4 w-4 p-0" />
            <span className="sr-only">Próxima página</span>
          </Button>

          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronsRight className="h-4 w-4 p-0" />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
