import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 345uetr</DialogTitle>
        <DialogDescription>Detalhes do Pedido</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground font-bold w-2">
                Status:
              </TableCell>
              <TableCell className="flex justify-start">Pendente</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground font-bold w-2">
                Cliente:
              </TableCell>
              <TableCell className="flex justify-start">Marcos Fraga</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground font-bold w-2">
                Telefone:
              </TableCell>
              <TableCell className="flex justify-start">51981890623</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground font-bold w-2">
                Email:
              </TableCell>
              <TableCell className="flex justify-start">
                marcosjsfraga@gmail.com
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </DialogContent>
  );
}
