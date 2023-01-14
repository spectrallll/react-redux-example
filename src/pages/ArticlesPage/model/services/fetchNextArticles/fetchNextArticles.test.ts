import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchNextArticles } from "./fetchNextArticles";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

jest.mock("../fetchArticlesList/fetchArticlesList");

describe("fetchNextArticles.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticles, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
  });
  test("fetchAritcleList not called", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticles, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
