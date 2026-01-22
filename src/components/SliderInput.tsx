import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface SliderInputProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  formatValue?: (value: number) => string;
  suffix?: string;
  className?: string;
}

export function SliderInput({
  id,
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  formatValue,
  suffix,
  className,
}: SliderInputProps) {
  const displayValue = formatValue ? formatValue(value) : value.toString();

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between">
        <Label htmlFor={id} className="text-sm font-medium">
          {label}
        </Label>
        <span className="text-sm font-semibold text-accent">
          {displayValue}
          {suffix && <span className="text-muted-foreground ml-1">{suffix}</span>}
        </span>
      </div>
      <Slider
        id={id}
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={([newValue]) => onChange(newValue)}
        className="py-2"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{formatValue ? formatValue(min) : min}{suffix}</span>
        <span>{formatValue ? formatValue(max) : max}{suffix}</span>
      </div>
    </div>
  );
}
