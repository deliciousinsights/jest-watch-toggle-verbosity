import Plugin from './index'

describe('Jest Watch Toggle Verbosity Plugin', () => {
  const plugin = new Plugin()

  describe('when providing usage info', () => {
    it('sends the proper info when verbosity is enabled', () => {
      expect(plugin.getUsageInfo({ verbose: true })).toEqual({
        key: 'v',
        prompt: 'turn off tests verbosity',
      })
    })

    it('sends the proper info when verbosity is disabled', () => {
      expect(plugin.getUsageInfo({ verbose: false })).toEqual({
        key: 'v',
        prompt: 'turn on tests verbosity',
      })
    })
  })

  describe('when running', () => {
    it('returns a resolved, falsey promise', () => {
      expect(plugin.run({}, () => {})).toEqual(Promise.resolve())
    })

    it('invokes `updateConfigAndRun()` with the proper `verbose` option', () => {
      const updateConfigAndRun = jest.fn()
      plugin.run({ verbose: true }, updateConfigAndRun)
      expect(updateConfigAndRun).toHaveBeenCalledWith({ verbose: false })

      updateConfigAndRun.mockReset()
      plugin.run({ verbose: false }, updateConfigAndRun)
      expect(updateConfigAndRun).toHaveBeenCalledWith({ verbose: true })
    })
  })
})
