# `prom-components`

> Prometheus React UI components and hooks

## Usage

### Components

```jsx
import { Checkbox } from "@prmsrswt/prom-components";

const Comp = () => {
  return (
    <div>
      <Checkbox id="chk-box-id">Check Me!</Checkbox>
    </div>
  );
}
```

### Hooks

```jsx
import { useLocalStorage } from "@prmsrswt/prom-components/lib/hooks";
import { Checkbox } from "@prmsrswt/prom-components";

const Comp = () => {
  const [isChecked, setIsChecked] = useLocalStorage<boolean>("check-me", false);

  return (
    <div>
      <Checkbox id="chk-box-id" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}>
        Check Me!
      </Checkbox>
    </div>
  );
}
```
