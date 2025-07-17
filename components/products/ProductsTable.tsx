"use client";
import React from "react";
import { products } from "@/data/products";
import { Avatar } from "@heroui/avatar";
import { Pagination } from "@heroui/pagination";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/table";
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import { FiMoreVertical } from "react-icons/fi";

// Define your product type
type Product = {
  title: string;
  slug: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  links: string[];
};

// Define only sortable keys
type SortableColumn = "title" | "category" | "price" | "stock";

// Define sort descriptor type
type SortDescriptor = {
  column: SortableColumn;
  direction: "ascending" | "descending";
};

// Table column config
const columns = [
  { name: "Name", uid: "title", sortable: true },
  { name: "Category", uid: "category", sortable: true },
  { name: "Price", uid: "price", sortable: true },
  { name: "Stock", uid: "stock", sortable: true },
  { name: "Actions", uid: "actions" },
];

export default function ProductsTable() {
  const [page, setPage] = React.useState(1);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "title",
    direction: "ascending",
  });

  const rowsPerPage = 4;
  const pages = Math.ceil(products.length / rowsPerPage);

  const sortedProducts = React.useMemo(() => {
    const sorted = [...products].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;
      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
    return sorted;
  }, [sortDescriptor]);

  const paginatedItems = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return sortedProducts.slice(start, end);
  }, [page, sortedProducts]);

  const renderCell = (item: Product, columnKey: string) => {
    switch (columnKey) {
      case "title":
        return (
          <div className="flex items-center gap-x-2">
            <Avatar src={item.links[0]} radius="full" size="sm" />
            <span>{item.title}</span>
          </div>
        );
      case "actions":
        return (
          <div className="flex items-center justify-center">
            <Dropdown>
              <DropdownTrigger className=" place-self-center w-fit">
                <Button isIconOnly variant="light" className=" w-fit" radius="full" size="sm">
                  <FiMoreVertical />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="view">View</DropdownItem>
                <DropdownItem key="edit">Edit</DropdownItem>
                <DropdownItem key="delete" className="text-danger">
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return item[columnKey as keyof Product];
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Table
        aria-label="Products Table"
        color="default"
        selectionMode="multiple"
        className="w-full"
        sortDescriptor={sortDescriptor}
        onSortChange={(desc) => setSortDescriptor(desc as SortDescriptor)}
        bottomContent={
          <div className="flex justify-center w-full py-2">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={setPage}
            />
          </div>
        }
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              allowsSorting={column.sortable}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent="No products found" items={paginatedItems}>
          {(item) => (
            <TableRow key={item.slug}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey as any)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
