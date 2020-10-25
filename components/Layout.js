import Header from "./Header";

export default function Layout({ children, ...props }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
