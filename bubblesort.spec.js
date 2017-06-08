describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
    expect( bubbleSort([3,4,12,5,11,59,24]) ).toEqual( [3,4,5,11,12,24,59] );
    expect( bubbleSort([80,8,21,63,3,4,12,5,11,59,24,1]) ).toEqual( [1,3,4,5,8,11,12,21,24,59,63,80] );
  });
});
