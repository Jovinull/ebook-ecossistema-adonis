function noopStore(options: any) {
  return { driver: { factory: () => new (NoopStore as any)(options) } }
}
