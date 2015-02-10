# bluebird-promises-corner-case
A throwaway repository to illustrate a bug in either bluebird@2.9.7, or node-java's use of bluebird.

There is either a bug in [node-java](https://github.com/joeferner/node-java), or a bug in bluebird@2.9.7.
This code demonstrates the bug.

In this commit, we use bluebird@2.9.6.
Run `node index.js` or `npm test`. It should run **without error**.

Then change package.json to specify bluebird@2.9.7.

Then do `npm install` to update bluebird.
Then run `node index.js`. It should **fail**.

Note that with 2.9.6, bluebird reports the promisified function source uses

        callback.call(this, fn);

Wherease with 2.9.7, bluebird reports the promisified function source uses

        callback.call(receiver, nodeback);
