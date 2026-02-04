import { getInstanceDomain } from '../../src/helpers/instanceData'

describe('getInstanceDomain', () => {
  let mockClient

  beforeEach(() => {
    mockClient = {
      getInstanceOptions: jest.fn()
    }
  })

  it('should return the domain without the first part for alice.twake.app', async () => {
    mockClient.getInstanceOptions.mockResolvedValue({
      domain: 'alice.twake.app'
    })

    const result = await getInstanceDomain(mockClient)

    expect(result).toBe('twake.app')
    expect(mockClient.getInstanceOptions).toHaveBeenCalledTimes(1)
  })

  it('should return the domain without the first part for alice.stg.twake.app', async () => {
    mockClient.getInstanceOptions.mockResolvedValue({
      domain: 'alice.stg.twake.app'
    })

    const result = await getInstanceDomain(mockClient)

    expect(result).toBe('stg.twake.app')
    expect(mockClient.getInstanceOptions).toHaveBeenCalledTimes(1)
  })

  it('should handle domains with different structures', async () => {
    mockClient.getInstanceOptions.mockResolvedValue({
      domain: 'test.example.com'
    })

    const result = await getInstanceDomain(mockClient)

    expect(result).toBe('example.com')
  })
})
