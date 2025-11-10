import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/table")({
  component: TableComponent,
});

function TableComponent() {
  return <div>表格页面</div>;
}
