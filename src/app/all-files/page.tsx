import DeleteButton from "@/components/delete-button";
import { list } from "@vercel/blob";

export default async function page() {
  const { blobs } = await list();
  console.log(blobs);
  return (
    <>
      <ul>
        {blobs.map((blob) => {
          return (
            <li key={blob.pathname}>
              {blob.pathname} - <DeleteButton url={blob.url} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
