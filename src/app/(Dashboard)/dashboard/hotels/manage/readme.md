 <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Input
                labelPlacement="outside"
                label="Title"
                placeholder="Enter hotel name"
              />
            </div>
            <div className="col-span-2">
              <Textarea
                label="Description"
                {...register("description")}
                labelPlacement="outside"
                placeholder="enter you hotel description"
                required
              />
            </div>
            <div className="col-span-2">
              <Input
                label="Image URLs (comma-separated)"
                {...register("images", {
                  setValueAs: (value) =>
                    value.split(",").map((url: string) => url.trim()),
                })}
                labelPlacement="outside"
                required
              />
            </div>
            <div className="col-span-1">
              <Input
                label="Country"
                labelPlacement="outside"
                {...register("location.country")}
                placeholder="enter country name"
              />
            </div>
            <div className="col-span-1">
              <Input
                label="City"
                {...register("location.city")}
                required
                placeholder="enter city"
                labelPlacement="outside"
              />
            </div>
            <div className="col-span-1">
              <Input
                label="Zip Code"
                placeholder="enter hotel area zipcode"
                labelPlacement="outside"
                {...register("location.zipCode")}
              />
            </div>
            <div className="col-span-1">
              <Input
                label="Address"
                {...register("location.address")}
                placeholder="enter hotel address"
                labelPlacement="outside"
              />
            </div>
            <div className="col-span-2">
              <ImageUploadForm/>
            </div>
            <div className="con-span-1">
              <Input
                label="Latitude"
                type="number"
                placeholder="enter lattitude code"
                labelPlacement="outside"
                {...register("location.latitude", { valueAsNumber: true })}
              />
            </div>
            <div className="col-span-1">
              <Input
                label="Longitude"
                type="number"
                labelPlacement="outside"
                placeholder="enter lognitude"
                {...register("location.longitude", { valueAsNumber: true })}
              />
            </div>
            <div className="col-span-1">
              <Input
                label="Contact Info"
                {...register("contactInfo")}
                placeholder="enter hotel contact info"
                labelPlacement="outside"
                required
              />
            </div>
            <div className="col-span-1">
              {/* Price Per Night */}
              <Input
                label="Price Per Night"
                type="number"
                {...register("pricePerNight", { valueAsNumber: true })}
                placeholder="etner hotel starting price per night"
                labelPlacement="outside"
                required
              />
            </div>
            <div className="col-span-1">
              <Input
                label="Available Rooms"
                type="number"
                {...register("availableRooms", { valueAsNumber: true })}
                placeholder="enter amount of room available"
                labelPlacement="outside"
                required
              />
            </div>
            {/* <div className="col-span-1">
              <CheckboxGroup
                defaultValue={["buenos-aires", "london"]}
                label="Select cities"
                className="flex"
              >
                <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
                <Checkbox value="sydney">Sydney</Checkbox>
                <Checkbox value="san-francisco">San Francisco</Checkbox>
                <Checkbox value="london">London</Checkbox>
                <Checkbox value="tokyo">Tokyo</Checkbox>
              </CheckboxGroup>
            </div> */}
            <div className="col-span-1">
              <Select
                label="Currency"
                {...register("currency")}
                labelPlacement="outside"
              >
                <SelectItem value="USD">USD</SelectItem>
                <SelectItem value="EUR">EUR</SelectItem>
                <SelectItem value="BDT">BDT</SelectItem>
              </Select>
            </div>
           
            <div className="col-span-1">
              <Input
                label="Check-In Time"
                {...register("policies.checkIn")}
                placeholder="Check-In Time"
                labelPlacement="outside"
              />
            </div>
            <div className="col-span-1">
              <Input
                label="Check-Out Time"
                {...register("policies.checkOut")}
                placeholder="Check-Out Time"
                labelPlacement="outside"
              />
            </div>
            <div className="col-span-2">
              <Textarea
                label="Cancellation Policy"
                {...register("policies.cancellationPolicy")}
                placeholder="enter cencelation policies"
                labelPlacement="outside"
                required
              />
            </div>
          </div>