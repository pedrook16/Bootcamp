import React from 'react';

import { Container } from './styles';

export default function Post(props) {
  return (
    <Container>
      <header>
        <img src={props.author.avatar} alt="" />
        <div>
          <span>{props.author.name}</span>
          <span>{props.date}</span>
        </div>
      </header>
      <section>{props.content}</section>
      <footer>
        {props.comments.map(c => (
          <div key={c.id}>
            <img src={c.author.avatar} alt="avatar" />
            <p>
              <span>{c.author.name}</span>
              <span>{c.content}</span>
            </p>
          </div>
        ))}
      </footer>
    </Container>
  );
}
