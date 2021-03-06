import className from "classnames";

type IButtonProps = {
  xl?: boolean;
  primary?: boolean;
  children: React.ReactNode;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    "btn-xl": props.xl,
    "btn-base": !props.xl,
    "btn-primary": props.primary,
    "btn-secondary": !props.primary,
  });

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block text-center;
          }

          .btn-base {
            @apply text-lg py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-logo-100 rounded-md;
          }

          .btn-secondary {
            @apply text-primary-500 bg-primary-1100;
          }

          .btn-secondary: :hover {
            @apply text-white bg-primary-500;
          }

          .btn-primary:hover {
            @apply bg-primary-600;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
