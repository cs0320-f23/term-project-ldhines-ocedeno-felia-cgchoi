package javaTest;

import com.squareup.moshi.JsonAdapter;
import com.squareup.moshi.Moshi;
import com.squareup.moshi.Types;
import com.sun.source.tree.AssertTree;
import data.WaitTimeDatasource;
import data.mocks.WaitTimeMock;
import handlers.WaitTimeHandler;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import server.DatasourceException;
import spark.Request;
import spark.Response;

import java.lang.reflect.Type;
import java.util.Map;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;


public class WaitTimeHandlerTest {

    private WaitTimeDatasource mockData;
    private WaitTimeHandler handler;
    private Request mockRequest;
    private Response mockResponse;

    @Before
    public void setUp() {
        mockData = new WaitTimeMock();
        handler = new WaitTimeHandler(mockData);
        mockRequest = mock(Request.class);
        mockResponse = mock(Response.class);
    }

    @Test
    public void testSuccessScenario() throws Exception {
        // Set up request parameters
        when(mockRequest.queryParams("seconds")).thenReturn("100000");
        when(mockRequest.queryParams("num")).thenReturn("23");
        // Parse the JSON response
        Moshi moshi = new Moshi.Builder().build();
        Type mapType = Types.newParameterizedType(Map.class, String.class, Object.class);
        JsonAdapter<Map<String, Object>> adapter = moshi.adapter(mapType);
        String result = (String) handler.handle(mockRequest, mockResponse);

        Map<String, Object> responseMap = adapter.fromJson(result);

        // Assert the response contains the expected data
        assertEquals("Success type expected", "success", responseMap.get("type"));
        assertEquals(72.46376811594203,responseMap.get("data"));
    }

    @Test
    public void testExceptionScenario() throws Exception {
        // Set up request parameters with invalid values to trigger an exception
        when(mockRequest.queryParams("seconds")).thenReturn("abc");
        when(mockRequest.queryParams("num")).thenReturn("xyz");

        // Call the handle method
        String result = (String) handler.handle(mockRequest, mockResponse);
        System.out.println(result);
        // Parse the JSON response
        Moshi moshi = new Moshi.Builder().build();
        Type mapType = Types.newParameterizedType(Map.class, String.class, Object.class);
        JsonAdapter<Map<String, Object>> adapter = moshi.adapter(mapType);

        Map<String, Object> responseMap = adapter.fromJson(result);

        // Assert the error response is as expected
        assertEquals("Error type expected", "error", responseMap.get("type"));
        String expectedSystemMessage = "Couldn't parse provided values, check formatting.";
        assertEquals(expectedSystemMessage, responseMap.get("system message"));
        String expectedErrorMessage = "data analysis failure, please examine request";
        assertEquals(expectedErrorMessage,responseMap.get("message"));
    }

    // Optionally, add more tests for different scenarios
}