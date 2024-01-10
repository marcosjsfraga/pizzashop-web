import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Trash2 } from "lucide-react";
import { TableCell, TableRow } from "@/components/ui/table";

// export interface Props {}

export default function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xs">
          <Search className="h-3 w-3 " />
          <span className="sr-only">Detalhes pedido</span>
        </Button>
      </TableCell>
      <TableCell className="font-medium">13707</TableCell>
      <TableCell className="font-medium">15 dias</TableCell>
      <TableCell className="flex items-center gap2">
        <span className="h-3 w-3 rounded-full bg-orange-400 mr-2" />
        <span className="font-medium text-muted-foreground">Pendente</span>
      </TableCell>
      <TableCell className="font-medium">Marcos Fraga</TableCell>
      <TableCell className="font-medium">R$ 12.345,56</TableCell>
      <TableCell className="font-medium">
        <Button variant="outline" size="xs">
          <ArrowRight className="h-4 w-4 mr-2 text-green-600" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell className="font-medium">
        <Button variant="ghost" size="xs">
          <Trash2 className="h-4 w-4 mr-2 text-red-600" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}
