import React, { Component } from 'react';

export default class Main extends Component {
  state = {
    repositoryInput: '',
  }

  render() {
    const { repositoryInput } = this.state;

    return (
      <>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="user/repository"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />

          <button type="submit">
            Add
          </button>
        </form>

        <ul>
          <li>
            <p>
              <strong>Repo</strong> (description)
            </p>

            <a href="#">Repo link</a>
          </li>
        </ul>
      </>
    );
  }
}
