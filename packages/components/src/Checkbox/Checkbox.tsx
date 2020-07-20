import React from "react";
import styles from './checkbox.module.css';

export type CheckboxProps = { disabled?: boolean };
export const Checkbox: React.FC<CheckboxProps> = ({ disabled = false }) => {
  console.log({ disabled });
  return (
    <label className={styles.label}>
      <span>Check Me</span>
      <input className={styles.chk} type="checkbox" disabled />
    </label>
  );
};
