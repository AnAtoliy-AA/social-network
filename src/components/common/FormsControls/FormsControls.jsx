import React from 'react';
import styles from './FormsControl.module.css'

const FormControl = ({ input, meta, child, ...props }) => {
    const showError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (showError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
}

export const TextArea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}> <textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}> <input {...input} {...restProps} /></FormControl>
}

export const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
      <div className={ styles.formControl + " " + (hasError ? styles.error : "") }>
        <Element {...input} {...props} />
        { hasError && <span> { meta.error } </span> }
      </div>
    );
  };