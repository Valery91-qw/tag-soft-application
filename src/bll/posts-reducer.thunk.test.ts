import {getPosts} from './posts-reducer';
import {postsApi} from '../dal/pasts-api';

jest.mock('../dal/pasts-api');

const postsApiMock = postsApi as jest.Mocked<typeof postsApi>

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
    dispatchMock.mockClear();
    getStateMock.mockClear();
    postsApiMock.getPosts.mockClear();
})

test('get posts thunk', async () => {

    const result = [{id: 1}, {id: 2}];

    postsApiMock.getPosts.mockReturnValue(Promise.resolve(result));

    const thunk = getPosts();
    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(1)
})