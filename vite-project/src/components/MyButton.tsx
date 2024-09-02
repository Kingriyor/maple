import React from "react";

const handleClick = (event: MouseEvent) => {
  console.log(event);
  // selectedIndex = index;
};

interface props {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger";
  onClick: () => void;
}

const MyButton = ({ children, color = "primary", onClick }: props) => {
  return (
    <>
      <button type="button" className="btn btn-success" onClick={onClick}>
        {children}
      </button>

      <button
        type="button"
        className={"btn btn-" + color}
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          handleClick(event as unknown as MouseEvent)
        }
      >
        Secondary
      </button>
    </>
  );
};

export default MyButton;
