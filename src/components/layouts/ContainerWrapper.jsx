export default function ContainerWrapper({ children }) {
  return (
    <main className="grid justify-center">
      <div className="container grid items-center gap-y-20 py-20">
        {children}
      </div>
    </main>
  );
}
