import useAuthentication from "../../hooks/useAuthentication";
import styles from "./CreatePost.module.css";

import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [formError, setFormError] = useState<string>("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError("");
  }

  const { loading, error: authError } = useAuthentication();

  return (
    <div className={styles.create_post}>
      <h2>Criar Post</h2>
      <p>Escreva sobre o que quiser, compartilhe seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Titulo: </span>
          <input
            type="text"
            name="title"
            required
            placeholder="Pense em um bom título..."
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          <span>Imagem: </span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem que represente o seu Post"
            value={image}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setImage(e.target.value);
            }}
          />
        </label>
        <label>
          <span>Conteudo: </span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            value={body}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </label>
        <label>
          <span>Tags: </span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            value={tags}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            //   setTags(e.target.value);
            }}
          />
        </label>
		{!loading && <button className="btn">Cadastrar</button>}
		{loading && <button className="btn" disabled>Aguarde...</button>}
		{authError && <p className="error">{authError}</p>}
      </form>
    </div>
  );
}
