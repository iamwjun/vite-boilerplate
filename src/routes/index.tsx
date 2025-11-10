import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Link to="/form">表单页面</Link>
      <Link to="/table">表格页面</Link>
    </div>
  );
}
