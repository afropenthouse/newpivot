export function Counter({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="counter-num">{value}</p>
      <p className="label-caps mt-2 text-muted-foreground">{label}</p>
    </div>
  );
}
