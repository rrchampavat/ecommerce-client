import Table from "@/components/ui/table";

const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" }
];

const columns = ["Element position", "Element name", "Symbol", "Atomic mass"];

const ProductTable = () => {
  return <Table rows={elements} columns={columns} />;
};

export default ProductTable;
