class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode; // e.g. 200, 201, etc.
    this.data = data;             // actual response data (object, array, etc.)
    this.message = message;       // message (default: "Success")
    this.success = statusCode < 400; // agar 200-399 hoga toh true, warna false
  }
}

export { ApiResponse };


