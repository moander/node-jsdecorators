/**
 * Wraps the target in a try/finally and restores process.cwd() to 
 * the value it had before the target was invoked.
 */

export function restorecwd(target, name, descriptor) {
  const callback = descriptor.value;
  return {
    ...descriptor,
    value() {
      var ocwd = process.cwd();
      try {
        return callback.apply(this, arguments);
      } finally {
        process.chdir(ocwd);
      }
    }
  };
}

export default restorecwd;

