const capitalize = string => (string ? `${string[0].toUpperCase()}${string.slice(1)}` : '')

it('capitalizes', () => expect(capitalize('hoo')).toEqual('Hoo'))
