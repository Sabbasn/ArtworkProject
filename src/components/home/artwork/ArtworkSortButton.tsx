interface ArtworkSortButtonProps {
  onClick: () => Event;
}

export default function ArtworkSortButton(props: ArtworkSortButtonProps) {
  return (
    <div>
      <i
        className="bi-filter-square-fill"
        style={{
          fontSize: "32px",
          cursor: "pointer",
          transition: "0.2s ease-in-out",
        }}
        onClick={props.onClick}
      ></i>
    </div>
  );
}
