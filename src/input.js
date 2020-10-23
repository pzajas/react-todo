import { React, useState } from 'react';

const input = () => {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
          <input type="text" value={this.state.value} onChange={this.inputChangeHandler} />
                </label>
            </form>
        </div>
    );
}

export default input;
