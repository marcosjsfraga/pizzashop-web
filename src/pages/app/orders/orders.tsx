import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { ArrowRight, Search, Trash2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>
      <div className="apsce-y-2.5">
        <form className="flex items-center gap-2 mb-2">
          <span className="font-semibold">Filtros</span>
          <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
        </form>

        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identificador</TableHead>
                <TableHead className="w-[180px]">Realizado há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-[140px]">Total Pedido</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[140px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <TableRow key={i}>
                    {/* -1- */}
                    <TableCell>
                      <Button variant="outline" size="xs">
                        <Search className="h-3 w-3 " />
                        <span className="sr-only">Detalhes pedido</span>
                      </Button>
                    </TableCell>
                    {/* -2- */}
                    <TableCell className="font-medium">13707</TableCell>
                    {/* -3- */}
                    <TableCell className="font-medium">13 dias</TableCell>
                    {/* -4- */}
                    <TableCell className="flex items-center gap2">
                      <span className="h-3 w-3 rounded-full bg-orange-400 mr-2" />
                      <span className="font-medium text-muted-foreground">
                        Pendente
                      </span>
                    </TableCell>
                    {/* -5- */}
                    <TableCell className="font-medium">Marcos Fraga</TableCell>
                    {/* -6- */}
                    <TableCell className="font-medium">R$ 12.345,56</TableCell>
                    {/* -7- */}
                    <TableCell className="font-medium">
                      <Button variant="outline" size="xs">
                        <ArrowRight className="h-4 w-4 mr-2 text-green-600" />
                        Aprovar
                      </Button>
                    </TableCell>
                    {/* -8- */}
                    <TableCell className="font-medium">
                      <Button variant="ghost" size="xs">
                        <Trash2 className="h-4 w-4 mr-2 text-red-600" />
                        Cancelar
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
