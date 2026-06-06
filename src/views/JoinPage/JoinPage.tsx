import { UnderConstructionSection } from "@/components/UnderConstructionSection/UnderConstructionSection";

export function JoinPage() {
  return (
    <UnderConstructionSection
      eyebrow="Oslo Roller Derby"
      title="Under konstruksjon"
      body={[
        "Denne siden er på vei. Snart finner du informasjon om nybegynnerkurs, treninger og hvordan du kan bli med i tigerflokken.",
        <>
          I mellomtiden kan du følge oss og holde deg oppdatert på{" "}
          <a
            href="https://www.instagram.com/oslorollerderby/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          !
        </>,
      ]}
      image={{ priority: true }}
    />
  );
}
