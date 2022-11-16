import child_process from 'child_process'

const runScenario = (scenario: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    child_process.exec(`TEST_SCENARIO=${scenario ?? 'basic'} yarn start`, (err, stdout) => {
      if (err) reject(err);
      resolve(stdout);
    })
  })
};

describe('e2e', () => {
  it('should display festivals data', async () => {
    const result = await runScenario('basic');

    expect(result.includes('Festival e2e 1'))
    expect(result.includes('Festival e2e 2'))
  });

  it('should handle 429s', async () => {
    const result = await runScenario('rate-limited');

    expect(result.includes('Festival e2e 1'))
    expect(result.includes('Festival e2e 2'))
    expect(result.includes('Got 429 from API, retrying'))
  })
});