import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props: ComponentPropsWithoutRef<"h1">) => (
      <h1
        style={{ fontSize: 32, marginTop: 0, marginBottom: 16, fontWeight: 700 }}
        {...props}
      />
    ),
    h2: (props: ComponentPropsWithoutRef<"h2">) => (
      <h2
        style={{ fontSize: 22, marginTop: 32, marginBottom: 12, fontWeight: 600 }}
        {...props}
      />
    ),
    h3: (props: ComponentPropsWithoutRef<"h3">) => (
      <h3
        style={{ fontSize: 18, marginTop: 24, marginBottom: 8, fontWeight: 600 }}
        {...props}
      />
    ),
    p: (props: ComponentPropsWithoutRef<"p">) => (
      <p style={{ lineHeight: 1.6, marginBottom: 16, color: "#d4d4d4" }} {...props} />
    ),
    code: (props: ComponentPropsWithoutRef<"code">) => (
      <code
        style={{
          fontFamily: "ui-monospace, SFMono-Regular, monospace",
          background: "#1a1a1a",
          padding: "2px 6px",
          borderRadius: 4,
          fontSize: 13,
        }}
        {...props}
      />
    ),
    pre: (props: ComponentPropsWithoutRef<"pre">) => (
      <pre
        style={{
          background: "#0f0f0f",
          color: "#e5e5e5",
          padding: 16,
          borderRadius: 8,
          overflowX: "auto",
          fontSize: 13,
          lineHeight: 1.5,
          border: "1px solid #262626",
        }}
        {...props}
      />
    ),
    a: (props: ComponentPropsWithoutRef<"a">) => (
      <a style={{ color: "#7dd3fc", textDecoration: "underline" }} {...props} />
    ),
    ...components,
  };
}
