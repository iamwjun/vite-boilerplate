import { createFileRoute } from "@tanstack/react-router";
import { styled } from "styled-components";

export const FormExample = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 12px;
  border-bottom: 1px solid #f5f5f5;
`;

export const Route = createFileRoute("/form")({
  component: FormComponent,
});

function FormComponent() {
  return <FormExample>表单页面</FormExample>;
}
