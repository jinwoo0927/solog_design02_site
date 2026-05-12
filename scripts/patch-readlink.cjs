const fs = require("fs");

function normalizeReadlinkError(error, path) {
  if (error && error.code === "EISDIR") {
    const normalized = new Error(`EINVAL: invalid argument, readlink '${path}'`);
    normalized.errno = -4071;
    normalized.code = "EINVAL";
    normalized.syscall = "readlink";
    normalized.path = path;
    return normalized;
  }

  return error;
}

const readlinkSync = fs.readlinkSync;
fs.readlinkSync = function patchedReadlinkSync(path, options) {
  try {
    return readlinkSync.call(fs, path, options);
  } catch (error) {
    throw normalizeReadlinkError(error, path);
  }
};

const readlink = fs.readlink;
fs.readlink = function patchedReadlink(path, options, callback) {
  const cb = typeof options === "function" ? options : callback;
  const opts = typeof options === "function" ? undefined : options;

  return readlink.call(fs, path, opts, (error, value) => {
    cb(error ? normalizeReadlinkError(error, path) : null, value);
  });
};

if (fs.promises && fs.promises.readlink) {
  const promiseReadlink = fs.promises.readlink.bind(fs.promises);
  fs.promises.readlink = async function patchedPromiseReadlink(path, options) {
    try {
      return await promiseReadlink(path, options);
    } catch (error) {
      throw normalizeReadlinkError(error, path);
    }
  };
}
