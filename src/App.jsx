import {
  Post
} from "./Post"

export function App() {
  return (
      <>
        <Post
          author="Armando Silva"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus vitae, odio illo fugiat doloribus quam, natus enim error, ducimus commodi delectus reprehenderit maiores. Perferendis hic illum libero quod consequatur." 
        />
        <Post
          author="Júlio Brown"
          content="New Crazy Post"
        />
      </>
    )
}
