class JestWatchToggleVerbosityPlugin {
  getUsageInfo(globalConfig) {
    const targetMode = globalConfig.verbose ? 'off' : 'on'
    return { key: 'v', prompt: `turn ${targetMode} tests verbosity` }
  }

  run({ verbose }, updateConfigAndRun) {
    updateConfigAndRun({ verbose: !verbose })
    return Promise.resolve()
  }
}

module.exports = JestWatchToggleVerbosityPlugin
