export default function AllAlerts({ items }: any): JSX.Element {
  return items;
}

export async function getStaticProps() {
  const items = await fetch("http://localhost:3000/alerts/alerts_all").then(
    (resp) => resp.json()
  );
  return {
    props: { items },
    revalidate: 10,
  };
}
