import styles from "./RacoonFace.module.scss";

type RacoonFaceProps = {
  className?: string;
};

const faceRows = [
  ".....................",
  "...LLM.........MLL...",
  "..LMMML.......LMMML..",
  "..LDBMLM.....MLMBDL..",
  "..LDBMMMMMMMMMMMDBL..",
  "...MMMMMMMMMMMMMMM...",
  "..MMMMLLMMMMMLLMMMM..",
  ".MMMLLBBBBBBBBBLLMMM.",
  ".MMLLBBWBMMMBWBBLLMM.",
  ".MLLBBBBBMMMBBBBBLLM.",
  ".MLBBBBBBLLLBBBBBBLM.",
  "..BBBBBBLLMLLBBBBBB..",
  "...BBBBBLLLLLBBBBB...",
  "....BBBBLLLLLBBBB....",
  ".....BBBBBBBBBBB.....",
  ".......BBBBBBB.......",
  ".........BBB.........",
] as const;

const pixelClassNames = {
  ".": styles.transparent,
  B: styles.mask,
  D: styles.dark,
  L: styles.light,
  M: styles.medium,
  W: styles.eye,
} as const;

export function RacoonFace({ className }: RacoonFaceProps) {
  const classes = className ? `${styles.face} ${className}` : styles.face;

  return (
    <div className={classes} aria-hidden="true">
      {faceRows.flatMap((row, rowIndex) =>
        [...row].map((pixel, columnIndex) => (
          <span
            className={`${styles.pixel} ${
              pixelClassNames[pixel as keyof typeof pixelClassNames]
            }`}
            key={`${rowIndex}-${columnIndex}`}
          />
        )),
      )}
    </div>
  );
}
